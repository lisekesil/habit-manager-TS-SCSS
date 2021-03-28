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
      alarm: HTMLAudioElement;
      alarmBtn: HTMLButtonElement;
      streak: HTMLSpanElement;
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
         alarm: document.querySelector('#alarm')!,
         alarmBtn: document.querySelector('#alarmBtn')!,
         streak: document.querySelector('#streak')!,
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
      this.ui.alarmBtn.addEventListener('click', () => this.stopAlarm());
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
      this.ui.streak.innerHTML = this.pomodorro.sessionCounter.toString();
      this.interval = window.setInterval(() => {
         if (this.pomodorro.currentSeconds === 0) {
            this.ui.alarm.play();
            this.ui.alarmBtn.classList.remove('hide');
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
      const sessionTime = document.querySelector('input[name="time"]:checked') as HTMLInputElement;
      const shortBTime = document.querySelector(
         'input[name="short-break"]:checked',
      ) as HTMLInputElement;
      const longBTime = document.querySelector(
         'input[name="long-break"]:checked',
      ) as HTMLInputElement;
      this.pomodorro = new Pomodorro(
         parseInt(sessionTime.value),
         parseInt(shortBTime.value),
         parseInt(longBTime.value),
      );
      this.switchDisabledButtons();
      this.startInterval();
   }

   handlePauseClick() {
      this.pauseUnpauseInterval();
      this.ui.pauseBtn.innerHTML = this.isPaused ? 'UNPAUSE' : 'PAUSE';
   }

   handleResetClick() {
      this.switchDisabledButtons();
      clearInterval(this.interval);
      this.isPaused = false;
      this.ui.modal.classList.add('hide');
      this.ui.pauseBtn.innerHTML = this.isPaused ? 'UNPAUSE' : 'PAUSE';
      this.ui.minutes.innerHTML = '00';
      this.ui.seconds.innerHTML = '00';
   }

   handleContinueClick() {
      // this.pauseUnpauseInterval();
      this.toggleModal();
      this.stopAlarm();
   }

   switchDisabledButtons() {
      this.isPomodorroInProgress = !this.isPomodorroInProgress;

      this.ui.startBtn.disabled = this.isPomodorroInProgress;
      this.ui.pauseBtn.disabled = !this.isPomodorroInProgress;
      this.ui.resetBtn.disabled = !this.isPomodorroInProgress;
   }

   stopAlarm() {
      this.ui.alarm.pause();
      this.ui.alarmBtn.classList.add('hide');
   }
}

const app = new App();
app.init();
