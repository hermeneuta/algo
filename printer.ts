import Queue from "./queues";

class PrintManager {
  private jobs: Queue<string>;
  constructor() {
    this.jobs = new Queue<string>();
  }

  add(document: string) {
    this.jobs.insert(document);
  }

  run() {
    while (this.jobs.read() !== undefined) {
      console.log(this.jobs.remove());
    }
  }
}

let printer_jobs = new PrintManager();
printer_jobs.add("Dokument pierwszy");
printer_jobs.add("Dokument drugi");
printer_jobs.add("Dokument trzeci");
printer_jobs.run();
