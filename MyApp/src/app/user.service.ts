import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  // constructor(private _service: AuthService) {}
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
  //   req = req.clone({
  //     // setheaders: {
  //     //   Authorization: `Bearer`
  //     // }
  //   });
  //   return next.handle(req);
  // }
}
