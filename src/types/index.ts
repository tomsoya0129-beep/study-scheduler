export interface BookUnit {
  id?: string;
  book_id?: string;
  label: string;
  title?: string;
  start_page?: number;
  end_page?: number;
  sort_order: number;
  parent_label?: string;
}

export interface Book {
  id: string;
  name: string;
  book_type: string;
  total_pages?: number;
  units: BookUnit[];
}

export interface Student {
  id: string;
  name: string;
  grade?: string;
  notes?: string;
}

export interface PlanSubject {
  id?: string;
  plan_id?: string;
  book_id: string;
  display_name?: string;
  start_unit_index: number;
  duration_hours: number;
  duration_display: string;
  units_per_day: number;
  study_days: string[];
  review_interval?: number;
  review_type: string;
  on_completion: string;
  next_book_id?: string;
  sort_order: number;
}

export interface PlanDayEvent {
  id?: string;
  plan_id?: string;
  date: string;
  event_type: string;
  content: string;
  is_off_day: boolean;
}

export interface PlanDailySetting {
  id?: string;
  plan_id?: string;
  date: string;
  study_hours?: number;
  is_off_day: boolean;
}

export interface PlanEntry {
  id: string;
  plan_id: string;
  date: string;
  entry_type: string;
  book_name?: string;
  duration_display?: string;
  content: string;
  detail?: string;
  sort_order: number;
}

export interface Plan {
  id: string;
  student_id: string;
  name: string;
  start_date: string;
  end_date: string;
  notes?: string;
  default_daily_hours?: number;
  weekday_hours?: number;
  weekend_hours?: number;
  mon_hours?: number | null;
  tue_hours?: number | null;
  wed_hours?: number | null;
  thu_hours?: number | null;
  fri_hours?: number | null;
  sat_hours?: number | null;
  sun_hours?: number | null;
  mon_off?: boolean;
  tue_off?: boolean;
  wed_off?: boolean;
  thu_off?: boolean;
  fri_off?: boolean;
  sat_off?: boolean;
  sun_off?: boolean;
  subjects: PlanSubject[];
  entries: PlanEntry[];
  day_events: PlanDayEvent[];
  daily_settings: PlanDailySetting[];
  student?: Student;
}
