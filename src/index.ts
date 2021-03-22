import './scss/main.scss';
import Pomodorro from './Pomodorro';

class App {
   pomodorro: Pomodorro;
   ui: {
      form: HTMLFormElement;
      startBtn: HTMLButtonElement;
      pauseBtn: HTMLButtonElement;
      resetBtn: HTMLButtonElement;
      counter: HTMLSpanElement;
   };
   interval: number;
   isPomodorroInProgress: boolean;
   isPaused: boolean;

   constructor() {
      this.ui = {
         form: document.querySelector('form')!,
         startBtn: document.querySelector('.startBtn')!,
         pauseBtn: document.querySelector('.pauseBtn')!,
         resetBtn: document.querySelector('.resetBtn')!,
         counter: document.querySelector('.counter')!,
      };

      this.isPomodorroInProgress = false;
      this.isPaused = false;
   }

   init() {
      this.addEventListeners();
   }

   addEventListeners() {
      this.ui.form.addEventListener('submit', (e) => this.handleStartClick(e));
      this.ui.pauseBtn.addEventListener('click', () => this.handlePauseClick());
      this.ui.resetBtn.addEventListener('click', () => this.handleResetClick());
   }

   startInterval() {
      this.interval = window.setInterval(() => {
         this.ui.counter.innerHTML = this.pomodorro.currentSeconds.toString();
         this.pomodorro.decrementSeconds();
      }, 1000);
   }

   handleStartClick(e: Event) {
      e.preventDefault();
      const time = document.querySelector('input[name="time"]:checked') as HTMLInputElement;
      this.pomodorro = new Pomodorro(parseInt(time.value));
      this.switchDisabledButtons();
      this.startInterval();
   }

   handlePauseClick() {
      this.isPaused = !this.isPaused;

      if (this.isPaused) {
         this.ui.pauseBtn.innerHTML = 'Unpause';
         clearInterval(this.interval);
      } else {
         this.ui.pauseBtn.innerHTML = 'Pause';
         this.startInterval();
      }
   }

   handleResetClick() {
      this.switchDisabledButtons();
      clearInterval(this.interval);
      this.ui.counter.innerHTML = '';
   }

   switchDisabledButtons() {
      this.isPomodorroInProgress = !this.isPomodorroInProgress;

      this.ui.startBtn.disabled = this.isPomodorroInProgress;
      this.ui.pauseBtn.disabled = !this.isPomodorroInProgress;
      this.ui.resetBtn.disabled = !this.isPomodorroInProgress;
   }
}

const app = new App();
app.init();
