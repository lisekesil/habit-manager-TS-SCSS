import './scss/main.scss';

interface IConfig {
   sessionSeconds: number;
   shortBreakSeconds: number;
   longBreakSeconds: number;
   longBreakStep: number;
}

class Pomodorro {
   public currentSeconds: number;
   public sessionCounter: number;
   private config: IConfig;
   public isBrake: boolean;

   constructor(minutes: number) {
      this.config = {
         sessionSeconds: minutes,
         shortBreakSeconds: 5,
         longBreakSeconds: 15,
         longBreakStep: 3,
      };
      this.sessionCounter = 1;
      this.isBrake = false;
      this.currentSeconds = minutes;
   }

   decrementSeconds() {
      this.currentSeconds--;

      if (this.currentSeconds === 0) {
         this.isBrake = !this.isBrake;

         if (this.isBrake) {
            if (this.sessionCounter % this.config.longBreakStep === 0) {
               this.currentSeconds = this.config.longBreakSeconds;
            } else {
               this.currentSeconds = this.config.shortBreakSeconds;
            }
         } else {
            this.sessionCounter++;
            this.currentSeconds = this.config.sessionSeconds;
         }
      }
   }
}

class App {
   pomodorro: Pomodorro;
   ui: {
      form: HTMLFormElement;
      startBtn: HTMLButtonElement;
      counter: HTMLSpanElement;
   };

   constructor() {
      this.ui = {
         form: document.querySelector('form')!,
         startBtn: document.querySelector('.startBtn')!,
         counter: document.querySelector('.counter')!,
      };
   }

   init() {
      this.addEventListeners();
   }

   addEventListeners() {
      this.ui.form.addEventListener('submit', (e) => this.handleStartClick(e));
   }

   handleStartClick(e: Event) {
      e.preventDefault();
      const time = document.querySelector('input[name="time"]:checked') as HTMLInputElement;
      this.pomodorro = new Pomodorro(parseInt(time.value));

      setInterval(() => {
         this.pomodorro.decrementSeconds();
         this.ui.counter.innerHTML = this.pomodorro.currentSeconds.toString();
      }, 1000);
   }
}

const app = new App();
app.init();
