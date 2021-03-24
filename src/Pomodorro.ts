interface IConfig {
   sessionSeconds: number;
   shortBreakSeconds: number;
   longBreakSeconds: number;
   longBreakStep: number;
}

export default class Pomodorro {
   private config: IConfig;
   public currentSeconds: number;
   public sessionCounter: number;
   public isBrake: boolean;
   public minutes: number;
   public seconds: number;

   constructor(sec: number) {
      this.config = {
         sessionSeconds: sec,
         shortBreakSeconds: 5,
         longBreakSeconds: 15,
         longBreakStep: 3,
      };
      this.sessionCounter = 1;
      this.isBrake = false;
      this.currentSeconds = sec;
   }

   setCurrentSeconds() {
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

   decrementSeconds() {
      if (this.currentSeconds === 0) {
         this.setCurrentSeconds();
      } else {
         this.currentSeconds--;
      }
   }
}
