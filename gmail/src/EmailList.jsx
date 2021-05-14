import React from 'react'
import './EmailList.css'
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SettingsIcon from "@material-ui/icons/Settings";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";


import Section from './Section'
import EmailRow from './EmailRow';



const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList_settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73e8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        <EmailRow
          title="twitch"
          subject="hey streamer"
          description=" this is great"
          time="10pm"
        />
        <EmailRow
          title="twitch"
          subject="hey streamer"
          description=" this is great"
          time="10pm"
        />
      </div>
    </div>
  );
}


export default EmailList
