#include "lib/beacon/BeaconScanner.h"

// SYSTEM_THREAD(ENABLED);

void onCallback(Beacon& beacon, callback_type type)
{
  if(NEW == type)
  {
    Serial.printlnf("Address: %s. Type: %s", beacon.getAddress().toString().c_str(), "Entered");
    Particle.publish("Entered", beacon.getAddress().toString().c_str());
  }

  else
  {
    Serial.printlnf("Address: %s. Type: %s", beacon.getAddress().toString().c_str(), "Left");
    Particle.publish("Left", beacon.getAddress().toString().c_str());
  }
}

void setup()
{
  Serial.begin();
  waitFor(Serial.isConnected, 30000);

  Scanner.setCallback(onCallback);
  Scanner.setScanPeriod(1);
  Scanner.startContinuous();
}

void loop()
{
  Scanner.loop();
}