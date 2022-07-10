#include "lib/beacon/BeaconScanner.h"

// SYSTEM_THREAD(ENABLED);

uint8_t ledPin = D7;
PinState ledState = LOW;

void onCallback(Beacon& beacon, callback_type type)
{
  String address = beacon.getAddress().toString().c_str();
  String action = (NEW == type) ? "Entered" : "Left";

  Serial.printlnf("Address: %s. Action: %s", address.c_str(), action.c_str());
  Particle.publish(action, address);
}

PinState toggleLED(String command)
{
  ledState = (LOW == ledState) ? HIGH : LOW;

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