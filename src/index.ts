import './scss/main.scss';
import Pomodorro from './Pomodorro';

class App {
   pomodorro: Pomodorro;
   ui: {
      form: HTMLFormElement;
      startBtn: HTMLButtonElement;
      pauseBtn: HTMLButtonElement;
      resetBtn: HTMLButtonElement;
      continueBtn: HTMLButtonElement;
      minutes: HTMLSpanElement;
      seconds: HTMLSpanElement;
      modal: HTMLElement;
   };
   interval: number;
   isPomodorroInProgress: boolean;
   isPaused: boolean;

   constructor() {
      this.ui = {
         form: document.querySelector('form')!,
         startBtn: document.querySelector('#startBtn')!,
         pauseBtn: document.querySelector('#pauseBtn')!,
         resetBtn: document.querySelector('#resetBtn')!,
         continueBtn: document.querySelector('#continueBtn')!,
         minutes: document.querySelector('#minutes')!,
         seconds: document.querySelector('#seconds')!,
         modal: document.querySelector('#modal')!,
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
      this.ui.continueBtn.addEventListener('click', () => this.handleContinueClick());
   }

   toggleModal() {
      this.pauseUnpauseInterval();
      this.ui.modal.classList.toggle('hide');
   }

   showTimer() {
      const min =
         this.pomodorro.currentSeconds > 59 ? Math.floor(this.pomodorro.currentSeconds / 60) : 0;

      const sec = min === 0 ? this.pomodorro.currentSeconds : this.pomodorro.currentSeconds % 60;

      this.ui.minutes.innerHTML = min > 9 ? min.toString() : `0${min}`;
      this.ui.seconds.innerHTML = sec > 9 ? sec.toString() : `0${sec}`;
   }

   startInterval() {
      this.showTimer();
      this.interval = window.setInterval(() => {
         if (this.pomodorro.currentSeconds === 0) {
            this.toggleModal();
         }
         this.pomodorro.decrementSeconds();
         this.showTimer();
      }, 1000);
   }

   pauseUnpauseInterval() {
      this.isPaused = !this.isPaused;

      if (this.isPaused) {
         clearInterval(this.interval);
      } else {
         this.startInterval();
      }
   }

   handleStartClick(e: Event) {
      e.preventDefault();
      const time = document.querySelector('input[name="time"]:checked') as HTMLInputElement;
      this.pomodorro = new Pomodorro(parseInt(time.value));
      this.switchDisabledButtons();
      this.startInterval();
   }

   handlePauseClick() {
      this.pauseUnpauseInterval();
      this.ui.pauseBtn.innerHTML = this.isPaused ? 'Unpause' : 'Pause';
   }

   handleResetClick() {
      this.switchDisabledButtons();
      clearInterval(this.interval);
      this.ui.minutes.innerHTML = '00';
      this.ui.seconds.innerHTML = '00';
   }

   handleContinueClick() {
      // this.pauseUnpauseInterval();
      this.toggleModal();
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
