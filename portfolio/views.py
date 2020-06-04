from django.shortcuts import render
from django.http import HttpResponse
import sendgrid
import os
import json
from sendgrid.helpers.mail import *

def index(request):
    return render(request, template_name='index.html')

def contact(request):
    data = json.loads(request.body.decode("utf-8"))

    sg = sendgrid.SendGridAPIClient(api_key="") #change before making repo public
    from_email = Email("info@davidwingfield.dev")
    to_email = To("d.wingfield815@gmail.com")
    subject = "New Message From " + data.get("name", "<UNKNOWN_SENDER>")
    content = Content("text/plain", "Email: " + data.get("email", "<UNKNOWN_EMAIL>") + "\n\n" + data.get("message", "<UNKNOWN_MESSAGE>"))
    mail = Mail(from_email, to_email, subject, content)
    response = sg.client.mail.send.post(request_body=mail.get())
    return HttpResponse("Success")