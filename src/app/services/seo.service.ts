// seo.service.ts
import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  setCanonicalURL(url?: string) {
    let canURL = url || this.document.URL;

    let link: HTMLLinkElement = this.document.querySelector("link[rel='canonical']") || 
      this.renderer.createElement('link');

    if (!link.getAttribute('rel')) {
      this.renderer.setAttribute(link, 'rel', 'canonical');
      this.renderer.appendChild(this.document.head, link);
    }

    this.renderer.setAttribute(link, 'href', canURL);
  }
}
