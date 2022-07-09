/******************************************************/
//       THIS IS A GENERATED FILE - DO NOT EDIT       //
/******************************************************/

#include "Particle.h"
#line 1 "c:/Users/Laurent/Documents/UdeS/S6/APP5/repo/argon/src/argon.ino"
#include "lib/beacon/BeaconScanner.h"

// SYSTEM_THREAD(ENABLED);

void onCallback(Beacon& beacon, callback_type type);
PinState toggleLED(String command);
void setup();
void loop();
#line 5 "c:/Users/Laurent/Documents/UdeS/S6/APP5/repo/argon/src/argon.ino"
uint8_t ledPin = D7;
PinState ledState = LOW;

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

PinState toggleLED(String command)
{
  if(LOW == ledState) ledState = HIGH;
  else ledState = LOW;

  digitalWrite(ledPin, ledState);

  return ledState;
}

void setup()
{
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);

  Serial.begin();
  waitFor(Serial.isConnected, 30000);

  Particle.function("toggle", toggleLED);

  Scanner.setCallback(onCallback);
  Scanner.setScanPeriod(1);
  Scanner.startContinuous();
}

void loop()
{
  Scanner.loop();
}