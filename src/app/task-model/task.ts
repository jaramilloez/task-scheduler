export class Task {
  constructor(
    readonly id: string,
    public name: string,
    public frequencyNumber: number,
    public frequencyUnit: string,
    public active: boolean,
    public dateActive: Date
  ) {
    if (new Date() > dateActive && !active) {
      active = true;
    }
  }

  complete(): void {
    this.active = false;

    let currentDate = new Date();
    let dateActive: Date = this.dateActive;
    let frequencyNumber: number = this.frequencyNumber;
    switch (this.frequencyUnit) {
      case 'Days':
        dateActive.setDate(currentDate.getDate() + frequencyNumber);
        break;
      case 'Weeks':
        dateActive.setDate(currentDate.getDate() + frequencyNumber * 7);
        break;
      case 'Months':
        dateActive.setMonth(currentDate.getMonth() + frequencyNumber);
        break;
      case 'Years':
        dateActive.setFullYear(currentDate.getFullYear() + frequencyNumber);
        break;
    }
  }
}
