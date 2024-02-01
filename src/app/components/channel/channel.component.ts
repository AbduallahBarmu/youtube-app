import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({

  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'], 
 
})
export class ChannelComponent implements OnInit {
  channels:any
  searchValue: string = ''; 
  searchForm: FormGroup; // Declare searchForm as FormGroup

  constructor(private fb: FormBuilder, private youtubeService: YoutubeService) {
    this.searchForm = this.fb.group({
      searchValue: '' // Initialize searchForm in the constructor
    }); 
  }
  

  ngOnInit(): void {
      
  }

  getChannels() {
    this.youtubeService.getYoutubeChannels(this.searchValue).subscribe((data) => {
      this.channels = data
    });
  }

  
  onSearchSubmit(): void{
   this.searchValue = this.searchForm.value.searchValue ?? '' ; 
   this.getChannels()
  }


}
