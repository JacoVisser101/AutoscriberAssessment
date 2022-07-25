import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { SymptomsDTO } from './symptom.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSymptoms(): string[] {
    return this.appService.getSymptoms();
  }
  
  @Post()
    sendSymptoms(@Body() symptoms: SymptomsDTO){
        console.log(symptoms);
        return symptoms;
    }
}
