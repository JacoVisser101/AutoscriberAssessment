import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSymptoms(): string[] {
    return ['Allergies', 'Ankle problems', 'Back problems', 'Bowel incontinence', 'Calf problems', 'Catarrh', 'Chest pain', 'Chilblains', 'Chronic pain', 'Living well with coeliac disease', 'Cold sore', 'Constipation', 'Living well with COPD', 'Cough', 'Dehydration', 'Dizziness (Lightheadedness)', 'Dry mouth', 'Earache', 'Elbow problems', 'Fever in adults', 'Fever in children', 'Flatulence', 'Flu', 'Foot problems', 'Hay fever', 'Headaches', 'Hearing loss', 'Heart palpitations', 'Hip problems', 'Bowel incontinence', 'Indigestion', 'Itching', 'Itchy bottom', 'Urinary incontinence', 'Knee problems', 'Migraine', 'Mouth ulcer', 'Neck problems', 'Nosebleed', 'Skin rashes in children', 'Shortness of breath', 'Shoulder problems', 'Skin rashes in children', 'Sore throat', 'Stomach ache and abdominal pain', 'Swollen glands', 'Testicular lumps and swelling', 'Thigh problems', 'Tinnitus', 'Toothache', 'Urinary incontinence', 'Urinary tract infection (UTI)', 'Vertigo', 'Vomiting in adults', 'Warts and verrucas', 'Warts and verrucas', 'Wrist, hand and finger problems'];
  }
}
