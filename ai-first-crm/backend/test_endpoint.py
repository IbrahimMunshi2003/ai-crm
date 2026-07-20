from fastapi.testclient import TestClient
from app.main import app
from app.core.database import Base, engine

print("Tables known to Base:", Base.metadata.tables.keys())

client = TestClient(app)

response = client.get("/analytics/overview")
print("Response status:", response.status_code)
try:
    print("Response body:", response.json())
except Exception as e:
    print("Failed to parse json:", e)
    print("Raw response:", response.text)
