export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
        }
        Relationships: []
      }
      training_tables: {
        Row: {
          id: string
          user_id: string
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "training_tables_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      breath_cycles: {
        Row: {
          id: string
          table_id: string
          breathe_time: number
          hold_time: number
          cycle_index: number
          created_at: string
        }
        Insert: {
          id?: string
          table_id: string
          breathe_time: number
          hold_time: number
          cycle_index: number
          created_at?: string
        }
        Update: {
          id?: string
          table_id?: string
          breathe_time?: number
          hold_time?: number
          cycle_index?: number
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "breath_cycles_table_id_fkey"
            columns: ["table_id"]
            isOneToOne: false
            referencedRelation: "training_tables"
            referencedColumns: ["id"]
          }
        ]
      }
    }
  }
}