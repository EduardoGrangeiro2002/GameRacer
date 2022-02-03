import fs from "fs";

class TemplatesUseCase {
  execute() {
    const data = fs.readFileSync(
      "BackEnd/src/modules/templates/interface.html",
      "utf-8",
    );
    return data;
  }
}

export { TemplatesUseCase };
