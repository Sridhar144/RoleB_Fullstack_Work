# auth/serializers.py

from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password', 'role')  # Make sure to include any other relevant fields

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)  # Ensure this method handles password hashing
        return user
