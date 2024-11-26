from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser
from .serializers import UserSerializer
from rest_framework import status

class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response(UserSerializer(user).data)

class LogoutView(APIView):
    def post(self, request):
        refresh = RefreshToken(request.data.get('refresh'))
        refresh.blacklist()
        return Response({'message': 'Logged out successfully'})

# New Register View
from rest_framework.exceptions import NotFound

class RegisterView(APIView):
    def get(self, request, *args, **kwargs):
        # Return an error if GET request is made to register
        raise NotFound(detail="Method 'GET' not allowed.", code=405)

    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            # You can add the role to the user during save if required
            role = request.data.get('role', 'user')  # Default to 'user' if no role is provided
            user = serializer.save(role=role)
            return Response({"message": "User created successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)