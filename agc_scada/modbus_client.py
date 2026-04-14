import random

def get_data():
    return {
        "dg": [
            {"status": random.choice([0,1]), "power": random.randint(0,200)},
            {"status": random.choice([0,1]), "power": random.randint(0,200)},
            {"status": random.choice([0,1]), "power": random.randint(0,200)},
            {"status": random.choice([0,1]), "power": random.randint(0,200)},
            {"status": random.choice([0,1]), "power": random.randint(0,200)}
        ],
        "bus_voltage": 415,
        "frequency": 50
    }