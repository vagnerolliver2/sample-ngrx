import {Course} from '../../../models/course';
import {CourseActions, CourseActionTypes} from './course.actions';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';


export interface CoursesState {
  courses: Course[];
  allCoursesLoaded: boolean;
}

export const initialCoursesState: CoursesState = {
  courses: [],
  allCoursesLoaded: false
}

/*
export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}
*/

export const adapter: EntityAdapter<Course> =
  createEntityAdapter<Course>();

/*
export const initialCoursesState: CoursesState = adapter.getInitialState({
  allCoursesLoaded: false
});
*/

export function coursesReducer(state = initialCoursesState, action: CourseActions): CoursesState {
  switch (action.type) {
    case CourseActionTypes.allCoursesLoaded:
      const newState: any = {
        courses: action.payload.courses,
        allCoursesLoaded: true
      };
 
      return newState;
      // return adapter.addAll(action.payload.courses, {...state, allCoursesLoaded: true});
    default:
      return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
