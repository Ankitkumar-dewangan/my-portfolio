from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import ContactMessageSerializer
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings

class ContactFormView(APIView):
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            data = serializer.validated_data

            # Email content
            subject = 'New Contact Message'
            from_email = settings.DEFAULT_FROM_EMAIL
            to_email = ['ankitdewangan1122@gmail.com']  # koi doosra Gmail ID


            context = {
                'name': data.get('name'),
                'email': data.get('email'),
                'phone': data.get('phone'),
                'suggestion': data.get('suggestion'),
                'feedback': data.get('feedback'),
            }

            html_content = render_to_string('email_template.html', context)
            email_message = EmailMultiAlternatives(subject, '', from_email, to_email)
            email_message.attach_alternative(html_content, "text/html")

            try:
                email_message.send()
                print("✅ Email sent successfully")
            except Exception as e:
                print("❌ Email error:", e)

            return Response({"message": "Saved and email attempted."}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
