export const STORAGE_KEYS = {
  IS_LOGGED_IN: 'is_logged_in',
  USER_INFO: 'user_info',
  CACHED_COURSES: 'cached_courses'
};

export const API_ENDPOINTS = {
  LOGIN: '?wsfunction=auth_login',
  GET_COURSES: '?wsfunction=core_course_get_courses',
  GET_USER_DETAILS: '?wsfunction=core_user_get_users_by_field'
};
