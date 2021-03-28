interface IConfig {
   sessionSeconds: number;
   shortBreakSeconds: number;
   longBreakSeconds: number;
   longBreakStep: number;
}

enum State {
   SESSION = 'SESSION',
   SHORTBREAK = 'SHORT BREAK',
   LONGBREAK = 'LONG BREAK',
}

export default class Pomodorro {
   private config: IConfig;
   public currentSeconds: number;
   public sessionCounter: number;
   public isBrake: boolean;
   public minutes: number;
   public seconds: number;
   public state: State;

   constructor(sessionSec: number, sBSec: number, lBSec: number) {
      this.config = {
         sessionSeconds: sessionSec,
         shortBreakSeconds: sBSec,
         longBreakSeconds: lBSec,
         longBreakStep: 3,
      };
      this.sessionCounter = 1;
      this.isBrake = false;
      this.currentSeconds = sessionSec;
      this.state = State.SESSION;
   }

   setCurrentSeconds() {
      this.isBrake = !this.isBrake;
      if (this.isBrake) {
         if (this.sessionCounter % this.config.longBreakStep === 0) {
            this.state = State.LONGBREAK;
            this.currentSeconds = this.config.longBreakSeconds;
         } else {
            this.state = State.SHORTBREAK;
            this.currentSeconds = this.config.shortBreakSeconds;
         }
      } else {
         this.state = State.SESSION;
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
