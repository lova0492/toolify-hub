import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import OutCall "http-outcalls/outcall";
import Migration "migration";
import Storage "blob-storage/Storage";

(with migration = Migration.run)
actor {
  type Video = {
    id : Nat;
    title : Text;
    content : Text;
    duration : Nat;
    style : Text;
    mood : Text;
  };

  type VideoPrompt = {
    topic : Text;
    style : Text;
    mood : Text;
    duration : Nat;
  };

  // Thumbnail Types and Storage
  type Thumbnail = {
    id : Nat;
    description : Text;
    style : Text;
    emotion : Text;
    content : Text;
  };

  // Prompt Builder - Video
  public query ({ caller }) func buildVideoPrompt(prompt : VideoPrompt) : async Text {
    "Create a " # prompt.duration.toText() # " minute " # prompt.style # " style video about " # prompt.topic # " with a " # prompt.mood # " mood.";
  };

  // Prompt Builder - Thumbnail
  public query ({ caller }) func buildThumbnailPrompt(text : Text, emotion : Text, colorPrefs : Text) : async Text {
    "Create a thumbnail with the text: " # text # ", emotion: " # emotion # " and color preference: " # colorPrefs;
  };

  // Simulate AI Model for Video Generation
  public shared ({ caller }) func generateVideo(prompt : VideoPrompt) : async Video {
    let fullPrompt = await buildVideoPrompt(prompt);

    let video : Video = {
      id = 1;
      title = prompt.topic # " - " # prompt.style;
      content = fullPrompt;
      duration = prompt.duration;
      style = prompt.style;
      mood = prompt.mood;
    };
    video;
  };

  // Simulate AI Model for Thumbnail Generation
  public shared ({ caller }) func generateThumbnail(text : Text, emotion : Text, colorPrefs : Text) : async Thumbnail {
    let fullPrompt = await buildThumbnailPrompt(text, emotion, colorPrefs);

    let thumbnail : Thumbnail = {
      id = 1;
      description = text # " - " # emotion;
      style = colorPrefs;
      emotion;
      content = fullPrompt;
    };
    thumbnail;
  };

  // List all available assets
  public query ({ caller = _ }) func listAssets() : async [(Text, Text)] {
    [("video1.mp4", "/assets/video1.mp4"), ("thumbnail1.jpg", "/assets/thumbnail1.jpg")];
  };

  // Get specific asset by key
  public query ({ caller = _ }) func getAsset(key : Text) : async ?Text {
    let assetMap = Map.empty<Text, Text>();
    assetMap.add("video1", "/assets/video1.mp4");
    assetMap.add("thumbnail1", "/assets/thumbnail1.jpg");
    assetMap.get(key);
  };

  // Perform HTTP Outcall
  public shared ({ caller = _ }) func httpOutcall(url : Text) : async Text {
    await OutCall.httpGetRequest(url, [], transform);
  };

  public query ({ caller = _ }) func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };
};
