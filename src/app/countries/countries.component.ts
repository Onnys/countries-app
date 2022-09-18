import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries!: Country[];
  country: Country = new Country();
  constructor(private countryService: CountryService, private router: Router,) { }

  ngOnInit() {
    this.countryService.getUsers().subscribe(data => {
      console.log(data);
      this.countries = data;
    })
  }
  userDetails(id: number) {
    this.router.navigate(['users', id]);
    console.log(id);

  }
  

}
