import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserPet} from "../../models/user-pet.interface";

@Component({
    selector: 'app-viewpet',
    templateUrl: './view.petcode.component.html',
    styleUrls: ['./view.petcode.component.scss'],
})
export class ViewPetcodeComponent implements OnInit {

  userPet: UserPet =
    {
      id: '1',
      petPhoto: 'https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg',
      petName: 'Rex',
      owner: {
        name: 'João',
        email: 'teste@teste.com',
        gender: 'M',
        phones: [
          {
            ddi: '55',
            ddd: '82',
            number: '999221574',
            isMyPhone: true,
            isWhatsapp: true,
            isTelegram: false
          }
        ],
        address: {
          zipCode: '57000-000',
          streetAddress: 'Rua A',
          streetNumber: '123',
          neighborhood: 'Ponta Verde',
          city: 'Maceió',
          state: 'AL',
          country: 'Brasil'
        }
      },
      petAge: '5',
      petDescription: 'Cachorro dócil',
      petIllness: [
        {
          id: '1',
          illnessName: 'Diabetes',
          illnessDescription: 'Necessita de insulina'
        }
      ]
    };

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.userPet);
  }
}
