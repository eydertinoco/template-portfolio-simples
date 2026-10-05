import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.scss']
})
export class PortifolioComponent implements OnInit {
  textoEnviado: Boolean = false;

  sobremin_texto1: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non viverra enim. Donec molestie pharetra velit ac commodo. Nullam ullamcorper diam aliquam ligula tincidunt dapibus. Proin pretium pulvinar augue vulputate convallis. Donec convallis hendrerit arcu vitae mollis. Vivamus eleifend ligula rutrum tristique tempus. Duis pulvinar sit amet tortor et tincidunt. Nullam quis tincidunt enim, ut mattis nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec enim enim.";

  youtubeList = [
    {
      id: 1,
      banner: 'https://static-media.hotmart.com/MTrErMZ8LOSBX5uDmW5P_eqzBGg=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/29bf34f3-159a-45c6-8789-4ad6815144f0/ChatGPTImage11dejulde202609_46_10.png?w=920',
      title: 'Curso Maquiagem na Web 1.0 - Automaquiagem',
      link: 'https://hotmart.com/pt-br/marketplace/produtos/maquiagemnaweb/J3864784O?sck=HOTMART_SITE&hotfeature=33'
    },
    {
      id: 2,
      banner: 'https://static-media.hotmart.com/MTrErMZ8LOSBX5uDmW5P_eqzBGg=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/29bf34f3-159a-45c6-8789-4ad6815144f0/ChatGPTImage11dejulde202609_46_10.png?w=920',
      title: 'Curso Maquiagem na Web 1.0 - Automaquiagem',
      link: 'https://hotmart.com/pt-br/marketplace/produtos/maquiagemnaweb/J3864784O?sck=HOTMART_SITE&hotfeature=33'
    },
    {
      id: 3,
      banner: 'https://static-media.hotmart.com/MTrErMZ8LOSBX5uDmW5P_eqzBGg=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/29bf34f3-159a-45c6-8789-4ad6815144f0/ChatGPTImage11dejulde202609_46_10.png?w=920',
      title: 'Curso Maquiagem na Web 1.0 - Automaquiagem',
      link: 'https://hotmart.com/pt-br/marketplace/produtos/maquiagemnaweb/J3864784O?sck=HOTMART_SITE&hotfeature=33'
    },
  ]

  constructor(
    private translate: TranslateService
  ) {
  }

  ngOnInit(): void {

  }
}
