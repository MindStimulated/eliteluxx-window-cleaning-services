import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'VITE_SUPABASE_URL'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'VITE_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          is_registered_user: boolean
          password_hash: string | null
          referral_source: string | null
          notes: string | null
          jobber_customer_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          phone: string
          is_registered_user?: boolean
          password_hash?: string | null
          referral_source?: string | null
          notes?: string | null
          jobber_customer_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          is_registered_user?: boolean
          password_hash?: string | null
          referral_source?: string | null
          notes?: string | null
          jobber_customer_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      service_addresses: {
        Row: {
          id: string
          customer_id: string
          address_line_1: string
          apt_suite: string | null
          city: string
          state: string
          zip_code: string
          parking_instructions: string | null
          access_instructions: string | null
          trash_location: string | null
          special_instructions: string | null
          is_primary: boolean
          created_at: string
        }
        Insert: {
          id?: string
          customer_id: string
          address_line_1: string
          apt_suite?: string | null
          city: string
          state: string
          zip_code: string
          parking_instructions?: string | null
          access_instructions?: string | null
          trash_location?: string | null
          special_instructions?: string | null
          is_primary?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          customer_id?: string
          address_line_1?: string
          apt_suite?: string | null
          city?: string
          state?: string
          zip_code?: string
          parking_instructions?: string | null
          access_instructions?: string | null
          trash_location?: string | null
          special_instructions?: string | null
          is_primary?: boolean
          created_at?: string
        }
      }
      addon_services: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number
          is_active: boolean
          sort_order: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          is_active?: boolean
          sort_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          is_active?: boolean
          sort_order?: number
          created_at?: string
        }
      }
      quotes: {
        Row: {
          id: string
          customer_id: string
          service_address_id: string | null
          bedrooms: number
          bathrooms: number
          half_baths: number
          square_footage: number | null
          frequency: string
          frequency_discount_percent: number
          base_price: number
          addon_total: number
          subtotal: number
          discount_amount: number
          tax_amount: number
          tip_amount: number
          total_amount: number
          parking_option: string | null
          access_option: string | null
          discount_code: string | null
          status: string
          expires_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          customer_id: string
          service_address_id?: string | null
          bedrooms: number
          bathrooms: number
          half_baths?: number
          square_footage?: number | null
          frequency: string
          frequency_discount_percent?: number
          base_price?: number
          addon_total?: number
          subtotal: number
          discount_amount?: number
          tax_amount: number
          tip_amount?: number
          total_amount: number
          parking_option?: string | null
          access_option?: string | null
          discount_code?: string | null
          status?: string
          expires_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_id?: string
          service_address_id?: string | null
          bedrooms?: number
          bathrooms?: number
          half_baths?: number
          square_footage?: number | null
          frequency?: string
          frequency_discount_percent?: number
          base_price?: number
          addon_total?: number
          subtotal?: number
          discount_amount?: number
          tax_amount?: number
          tip_amount?: number
          total_amount?: number
          parking_option?: string | null
          access_option?: string | null
          discount_code?: string | null
          status?: string
          expires_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      quote_addons: {
        Row: {
          id: string
          quote_id: string
          addon_service_id: string
          quantity: number
          unit_price: number
          total_price: number
        }
        Insert: {
          id?: string
          quote_id: string
          addon_service_id: string
          quantity?: number
          unit_price: number
          total_price: number
        }
        Update: {
          id?: string
          quote_id?: string
          addon_service_id?: string
          quantity?: number
          unit_price?: number
          total_price?: number
        }
      }
      bookings: {
        Row: {
          id: string
          quote_id: string | null
          customer_id: string
          service_address_id: string | null
          service_date: string
          arrival_window_start: string
          arrival_window_end: string
          status: string
          payment_method: string | null
          payment_status: string
          jobber_job_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          quote_id?: string | null
          customer_id: string
          service_address_id?: string | null
          service_date: string
          arrival_window_start: string
          arrival_window_end: string
          status?: string
          payment_method?: string | null
          payment_status?: string
          jobber_job_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          quote_id?: string | null
          customer_id?: string
          service_address_id?: string | null
          service_date?: string
          arrival_window_start?: string
          arrival_window_end?: string
          status?: string
          payment_method?: string | null
          payment_status?: string
          jobber_job_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      payment_methods: {
        Row: {
          id: string
          customer_id: string
          name_on_card: string
          billing_zip: string
          card_last_four: string
          card_type: string | null
          exp_month: number
          exp_year: number
          stripe_payment_method_id: string | null
          is_default: boolean
          created_at: string
        }
        Insert: {
          id?: string
          customer_id: string
          name_on_card: string
          billing_zip: string
          card_last_four: string
          card_type?: string | null
          exp_month: number
          exp_year: number
          stripe_payment_method_id?: string | null
          is_default?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          customer_id?: string
          name_on_card?: string
          billing_zip?: string
          card_last_four?: string
          card_type?: string | null
          exp_month?: number
          exp_year?: number
          stripe_payment_method_id?: string | null
          is_default?: boolean
          created_at?: string
        }
      }
      discount_codes: {
        Row: {
          id: string
          code: string
          description: string | null
          discount_type: string
          discount_value: number
          min_order_amount: number
          max_uses: number | null
          current_uses: number
          expires_at: string | null
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          code: string
          description?: string | null
          discount_type: string
          discount_value: number
          min_order_amount?: number
          max_uses?: number | null
          current_uses?: number
          expires_at?: string | null
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          code?: string
          description?: string | null
          discount_type?: string
          discount_value?: number
          min_order_amount?: number
          max_uses?: number | null
          current_uses?: number
          expires_at?: string | null
          is_active?: boolean
          created_at?: string
        }
      }
    }
  }
}