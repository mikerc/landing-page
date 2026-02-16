

export class Index {

  constructor(container: HTMLElement) {
  }

  public render(): void {
    //  this.container.innerHTML = 'Hello World';
  }


async getData() {
  try {
    const url = `${import.meta.env.VITE_API_URL}user/getUser`;
    const response = await fetch(url);
    const data = await response.json();
    const div = document.querySelector('#userDiv') as HTMLElement;
    if (div) {
      div.textContent = `Current User: ${data.Name}`;
    }
  } catch (error) {
    console.error('Failed to load user:', error);
  }
}

  public init() {

    console.log('in init init');
    console.log('All env vars:', import.meta.env);
    this.getData();

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

