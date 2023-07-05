import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import{PagesService} from '../../services/pages.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  wordpressContent: any;

  constructor(private pagesService: PagesService,
    private renderer: Renderer2, 
    private el: ElementRef) { }

  ngOnInit(): void {
    this.fetchWordpressContent();
  }

  fetchWordpressContent(): void {
    this.pagesService.getPageContent().subscribe((data : any) =>{
      //console.log(data);
      this.wordpressContent = data;
     // this.renderWordpressBlocks();
      console.log(this.wordpressContent);
    });
  }

  getACFFields(acf: any): { key: string; value: any }[] {
    return Object.keys(acf).map(key => ({ key, value: acf[key] }));
  }

  // renderWordpressBlocks(): void {
  //   const container = this.el.nativeElement.querySelector('.wordpress-blocks');
  //   container.innerHTML = '';
  //   this.wordpressContent.forEach((block:any) => {
  //     const blockElement = this.renderer.createElement(block.name);
  //     for (const [key, value] of Object.entries(block.attributes)) {
  //       this.renderer.setAttribute(blockElement, key, '');
  //     }
  //     this.renderer.appendChild(container, blockElement);
  //   });
  // }
}
