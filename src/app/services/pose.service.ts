import { Injectable } from '@angular/core';
import { Pose } from '../Pose';
import { POSES } from '../mock-poses';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoseService {

  private posesUrl = 'api/poses';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** POST: add a new pose to the server */
  create(pose: Pose): Observable<Pose> {
    return this.http.post<Pose>(this.posesUrl, pose, this.httpOptions).pipe(
      tap((newPose: Pose) => this.log(`added pose w/ id=${newPose.id}`)),
      catchError(this.handleError<Pose>('addPose'))
    );
  }

  /* GET pose whose name contains search term */
searchPoses(term: string): Observable<Pose[]> {
  if (!term.trim()) {
    // if not search term, return empty pose array.
    return of([]);
  }
  return this.http.get<Pose[]>(`${this.posesUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found poses matching "${term}"`) :
       this.log(`no poses matching "${term}"`)),
    catchError(this.handleError<Pose[]>('searchPoses', []))
  );
}

  getPoses(): Observable<Pose[]> {
    return this.http.get<Pose[]>(this.posesUrl)
      .pipe(
        tap(_ => this.log('fetched poses')),
        catchError(this.handleError<Pose[]>('getPoses', []))
      );
}

  /** GET Pose by id. Will 404 if id not found */
  getPose(id: number): Observable<Pose> {
    const url = `${this.posesUrl}/${id}`;
    return this.http.get<Pose>(url).pipe(
      tap(_ => this.log(`fetched pose id=${id}`)),
      catchError(this.handleError<Pose>(`getPose id=${id}`))
    );
}

/** PUT: update the pose on the server */
  updatePose(pose: Pose): Observable<any> {
    return this.http.put(this.posesUrl, pose, this.httpOptions).pipe(
      tap(_ => this.log(`updated pose id=${pose.id}`)),
      catchError(this.handleError<any>('updatePose'))
    );
}

  /** DELETE: delete the pose from the server */
  delete(id: number): Observable<Pose> {
    const url = `${this.posesUrl}/${id}`;

    return this.http.delete<Pose>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted pose id=${id}`)),
      catchError(this.handleError<Pose>('deletePose'))
  );
}

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}

  private log(message: string) {
    this.messageService.add(`PoseService: ${message}`);
  }
}
