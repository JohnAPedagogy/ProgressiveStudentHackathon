using System;
using TechTalk.SpecFlow;

namespace Shouty.Specs.StepDefinitions
{
    [Binding]
    public class StepDefinitions
    {
        private Person lucy = new Person();
        private Person sean = new Person();

        [Given("Lucy is located {int}m from Sean")]
        public void GivenLucyIsLocatedMFromSean(int distance)
        {
            lucy.MoveTo(distance);
        }

        [When("Sean shouts {string}")]
        public void WhenSeanShouts(string message)
        {
            sean.Shout(message);
        }

        [Then("Lucy hears Sean's message")]
        public void ThenLucyHearsSeanSMessage()
        {
            throw new PendingStepException();
        }
    }
}
