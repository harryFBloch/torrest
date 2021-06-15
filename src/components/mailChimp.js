import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import './mailChimp.css'

export const mailChimp = () => {

  const url = "https://yahoo.us1.list-manage.com/subscribe/post?u=06840922894d94d3e32062ac7&amp;id=a978b0c594"

  return (
    <div>
      <MailchimpSubscribe url={url} classNamee="chimp-form"/>
    </div>
  )
}

export default mailChimp;
 