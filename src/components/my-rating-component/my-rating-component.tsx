import  { Component, Prop, State } from  '@stencil/core';

@Component({
  tag: 'my-rating',
  styleUrl: 'my-rating-component.css',
  shadow: true
})
export  class  MyRatingComponent  {
  @Prop() maxValue: number = 5;
  @Prop() value: number = 0;

  @State() starList: Array<object> = [];

  componentWillLoad() {
    this.createStarList();
  }

  createStarList() {
    let starList = [];

    for (let i = 1; i <= this.maxValue; i++) {
      if (i <= this.value) {
        starList.push(<span class="rating">&#x2605;</span>);
      } else {
        starList.push(<span class="rating" >&#x2606;</span>);
      }
    }

    this.starList = starList;
  }

  render() {
    return  (
      <div>
        {this.starList}
      </div>
    );
  }
}
