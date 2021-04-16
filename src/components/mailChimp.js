import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import './mailChimp.css'

export const mailChimp = () => {

  const url = "https://gmail.us1.list-manage.com/subscribe/post?u=01e89f38da1c03b340e884c7f&amp;id=e45a80bedd"

  return (
    <div>
      <MailchimpSubscribe url={url} classNamee="chimp-form"/>
    </div>
  )
}

export default mailChimp;
