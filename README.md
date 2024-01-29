## Components:

VideoCardComponent: Responsible for displaying individual video information (title, thumbnail, note).
VideoListComponent: Hosts multiple VideoCardComponents, allows drag-and-drop reordering, and displays refresh button.
ChannelComponent: Main component, handles fetching videos based on channel ID entered in the textbox and passes data to VideoListComponent.

## Services:

- YoutubeAPIService: Handles communication with the YouTube API to fetch video data based on channel ID.
- LocalStorageService: Saves and retrieves app state (video order, notes) from the browser's local storage.

## State Management:

NGXS store: Stores the list of videos (with titles, notes, and positions) along with the current channel ID. 
Provides actions for updating video order, notes, and refreshing videos.
Tech Stack:

NGXS: State management library for storing and managing app state.
ngx-drag-and-drop: Library for implementing drag-and-drop functionality.
Angular YouTube Player: (Optional) Library for embedding YouTube videos directly in the app.


## Implementations:

Dynamically fetch video data: by useing YoutubeAPIService to fetch video data based on the user-entered channel ID on every component update. 
This approach is light on local storage usage but requires frequent API calls.
Cache video data: Fetch video data initially based on the channel ID and store it in the NGXS store. 
pdate the store with notes and order changes, but only send refreshed information back to the API when necessary. 
This approach reduces API calls but uses more local storage.
