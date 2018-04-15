/**
 * @customElement
 * @polymer
 */
class LdsTitleSingleArticle extends Polymer.Element {
  static get is() {
    return 'lds-title-single-article';
  }
  static get properties() {
    return {
      viewVideo: {
        type: Boolean,
        value: false
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.sampleData = sampleTitleData;
  }

  playVideo() {
    this.viewVideo = true;
    console.log("click");
  }
}

window.customElements.define(LdsTitleSingleArticle.is, LdsTitleSingleArticle);