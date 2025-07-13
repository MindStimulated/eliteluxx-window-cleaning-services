import { describe, it, expect } from 'vitest';

// Price calculation logic extracted for testing
const calculatePrice = (data: {
  bedrooms: number;
  bathrooms: number;
  halfBaths: number;
  sqFt: number;
  frequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly';
  addOns: string[];
}) => {
  const basePrice = 135;
  const frequencyDiscounts = {
    'one-time': 0,
    'weekly': 0.30,
    'bi-weekly': 0.20,
    'monthly': 0.05,
  };

  const addOnServices = [
    { id: 'deep-cleaning', price: 95 },
    { id: 'move-in-out', price: 125 },
    { id: 'inside-oven', price: 35 },
    { id: 'hand-wash-dishes', price: 45 },
    { id: 'shedding-pets', price: 42 },
    { id: 'green-cleaning', price: 0 },
    { id: 'inside-cabinets-full', price: 95 },
    { id: 'inside-cabinets-empty', price: 52 },
    { id: 'inside-fridge-full', price: 55 },
    { id: 'inside-fridge-empty', price: 35 },
    { id: 'load-laundry', price: 15 },
    { id: 'inside-windows', price: 125 },
    { id: 'walls', price: 25 },
    { id: 'disinfectant', price: 35 },
  ];

  const sizeMultiplier = Math.max(1, data.sqFt / 500);
  const roomMultiplier = 1 + (data.bedrooms - 1) * 0.3 + data.bathrooms * 0.2 + data.halfBaths * 0.1;
  const subtotal = basePrice * sizeMultiplier * roomMultiplier;
  const discount = frequencyDiscounts[data.frequency];
  const baseTotal = subtotal * (1 - discount);
  
  const addOnTotal = data.addOns.reduce((total, addOnId) => {
    const addOn = addOnServices.find(service => service.id === addOnId);
    return total + (addOn ? addOn.price : 0);
  }, 0);

  return baseTotal + addOnTotal;
};

describe('Price Calculation Logic', () => {
  it('calculates base price correctly', () => {
    const baseData = {
      bedrooms: 1,
      bathrooms: 1,
      halfBaths: 0,
      sqFt: 500,
      frequency: 'one-time' as const,
      addOns: [],
    };

    const price = calculatePrice(baseData);
    expect(price).toBe(135); // Base price for minimal setup
  });

  it('applies size multiplier correctly', () => {
    const smallHome = {
      bedrooms: 1,
      bathrooms: 1,
      halfBaths: 0,
      sqFt: 500,
      frequency: 'one-time' as const,
      addOns: [],
    };

    const largeHome = {
      ...smallHome,
      sqFt: 1000,
    };

    const smallPrice = calculatePrice(smallHome);
    const largePrice = calculatePrice(largeHome);

    expect(largePrice).toBeGreaterThan(smallPrice);
    expect(largePrice).toBe(smallPrice * 2); // Double the size = double the price
  });

  it('applies room multiplier correctly', () => {
    const baseData = {
      bedrooms: 1,
      bathrooms: 1,
      halfBaths: 0,
      sqFt: 500,
      frequency: 'one-time' as const,
      addOns: [],
    };

    const moreRooms = {
      ...baseData,
      bedrooms: 3,
      bathrooms: 2,
      halfBaths: 1,
    };

    const basePrice = calculatePrice(baseData);
    const moreRoomsPrice = calculatePrice(moreRooms);

    expect(moreRoomsPrice).toBeGreaterThan(basePrice);
  });

  it('applies frequency discounts correctly', () => {
    const baseData = {
      bedrooms: 1,
      bathrooms: 1,
      halfBaths: 0,
      sqFt: 500,
      frequency: 'one-time' as const,
      addOns: [],
    };

    const oneTimePrice = calculatePrice(baseData);
    const weeklyPrice = calculatePrice({ ...baseData, frequency: 'weekly' });
    const biweeklyPrice = calculatePrice({ ...baseData, frequency: 'bi-weekly' });
    const monthlyPrice = calculatePrice({ ...baseData, frequency: 'monthly' });

    expect(weeklyPrice).toBe(oneTimePrice * 0.7); // 30% discount
    expect(biweeklyPrice).toBe(oneTimePrice * 0.8); // 20% discount
    expect(monthlyPrice).toBe(oneTimePrice * 0.95); // 5% discount
  });

  it('adds add-on services correctly', () => {
    const baseData = {
      bedrooms: 1,
      bathrooms: 1,
      halfBaths: 0,
      sqFt: 500,
      frequency: 'one-time' as const,
      addOns: [],
    };

    const withAddOns = {
      ...baseData,
      addOns: ['deep-cleaning', 'inside-oven', 'green-cleaning'],
    };

    const basePrice = calculatePrice(baseData);
    const withAddOnsPrice = calculatePrice(withAddOns);

    // Deep cleaning: $95, Inside oven: $35, Green cleaning: $0
    expect(withAddOnsPrice).toBe(basePrice + 95 + 35 + 0);
  });

  it('handles complex scenarios correctly', () => {
    const complexData = {
      bedrooms: 4,
      bathrooms: 3,
      halfBaths: 1,
      sqFt: 2500,
      frequency: 'weekly' as const,
      addOns: ['deep-cleaning', 'move-in-out', 'inside-windows'],
    };

    const price = calculatePrice(complexData);

    // Should be a reasonable price for a large home with weekly service and add-ons
    expect(price).toBeGreaterThan(200);
    expect(price).toBeLessThan(2000);
  });

  it('handles edge cases', () => {
    // Minimum values
    const minData = {
      bedrooms: 1,
      bathrooms: 1,
      halfBaths: 0,
      sqFt: 200,
      frequency: 'one-time' as const,
      addOns: [],
    };

    // Maximum reasonable values
    const maxData = {
      bedrooms: 6,
      bathrooms: 5,
      halfBaths: 3,
      sqFt: 10000,
      frequency: 'one-time' as const,
      addOns: ['deep-cleaning', 'move-in-out', 'inside-windows', 'inside-cabinets-full'],
    };

    const minPrice = calculatePrice(minData);
    const maxPrice = calculatePrice(maxData);

    expect(minPrice).toBeGreaterThan(0);
    expect(maxPrice).toBeGreaterThan(minPrice);
    expect(maxPrice).toBeLessThan(10000); // Sanity check
  });
});