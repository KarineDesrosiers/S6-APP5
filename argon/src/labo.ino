uint32_t value;

void setup()
{
  Serial.begin();

  Particle.variable("value", value);
}

void loop()
{
  value = rand() % 100;
  Particle.publish("value-updated");

  Serial.printlnf("value = %lu", value);

  delay(500);
}