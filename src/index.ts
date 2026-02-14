

export class Index {

  constructor(container: HTMLElement) {
  }

  public render(): void {
    //  this.container.innerHTML = 'Hello World';
  }


  async getData() {
    const response = await fetch('http://localhost:53632/api/user/getUser');
    const data = await response.json();
    console.log(data);
  }


  public init() {

    console.log('in init init');

    // let btn2 = document.querySelector('#scrollButton');
    // if (btn2) {
    //   btn2!.addEventListener('click', (e) => {
    //     const input = document.querySelector("#scrollParam") as HTMLInputElement;
    //     console.log(input.value);
    //     grid.scroll(1);
    //     // don't have to call - it's called from onScroll event grid.updateDebugOverlay();
    //   });
    // }

  }

} // end init

