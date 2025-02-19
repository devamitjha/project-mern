import React from 'react';
import "./Features.scss";

const Features = () => {
  return (
    <div className="features-page">
      <div class="title-large">
        <div class="title-large-text">Features</div>
      </div>
      <div className="feature-lists">
        <ul>
          <li>
            <i class="icon f7-icons">infinite</i>
            Infinite Scroll
            <i class="icon f7-icons right">chevron_right</i>            
            </li>
          <li><i class="icon f7-icons">square_favorites_alt_fill</i>Notification<i class="icon f7-icons right">chevron_right</i></li>
          <li><i class="icon f7-icons">sidebar_left</i>Panel<i class="icon f7-icons right">chevron_right</i></li>
          <li><i class="icon f7-icons">photo_fill_on_rectangle_fill</i>Photo Browser<i class="icon f7-icons right">chevron_right</i></li>
          <li><i class="icon f7-icons">arrow_up_square_fill</i>Popup<i class="icon f7-icons right">chevron_right</i></li>
          <li><i class="icon f7-icons">arrow_uturn_down_circle_fill</i>Pull To Refresh<i class="icon f7-icons right">chevron_right</i></li>
          <li><i class="icon f7-icons">arrowtriangle_up_square_fill</i>Bottom Sheet<i class="icon f7-icons right">chevron_right</i></li>
          <li><i class="icon f7-icons">square_arrow_left_fill</i>Swipe To Delete<i class="icon f7-icons right">chevron_right</i></li>
          <li><i class="icon f7-icons">square_split_2x1_fill</i>Tabs<i class="icon f7-icons right">chevron_right</i></li>
          <li><i class="icon f7-icons">square_arrow_up_on_square_fill</i>Toast<i class="icon f7-icons right">chevron_right</i></li>
          <li><i class="icon f7-icons">arrowtriangle_down_square_fill</i>Accordion<i class="icon f7-icons right">chevron_right</i></li>
          <li><i class="icon f7-icons">app_badge_fill</i>Tags<i class="icon f7-icons right">chevron_right</i></li>
          <li><i class="icon f7-icons">arrow_2_circlepath_circle_fill</i>Placeholder<i class="icon f7-icons right">chevron_right</i></li>
          <li><i class="icon f7-icons">star_lefthalf_fill</i>Ratings<i class="icon f7-icons right">chevron_right</i></li>
          <li><i class="icon f7-icons">ticket_fill</i>Ticket<i class="icon f7-icons right">chevron_right</i></li>
        </ul>
      </div>
    </div>
  )
}

export default Features



