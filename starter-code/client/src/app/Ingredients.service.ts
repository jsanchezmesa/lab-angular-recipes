import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class IngredientsService {
  BASE_URL: string = "http://localhost:3000";

  constructor(private http: Http) {}

  getIngredients() {
    return this.http
      .get(`${this.BASE_URL}/api/ingredients`)
      .map(res => res.json());
  }

  addIngredient(quantity, recipe, ingredient) {
    return this.http
      .post(
        `${this.BASE_URL}/api/dishes/${recipe}/ingredients/${ingredient}/add`,
        { quantity }
      )
      .map(res => res.json());
  }
}
