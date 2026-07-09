import { useAppSelector } from "../../app/hooks";
import InteractionField from "./InteractionField";

export default function InteractionForm() {

  const interaction = useAppSelector(
    state => state.interaction
  );

  return (

    <div className="space-y-5">

      <InteractionField
        label="Doctor"
        value={interaction.hcp_name}
      />

      <InteractionField
        label="Date"
        value={interaction.interaction_date}
      />

      <InteractionField
        label="Meeting Type"
        value={interaction.interaction_type}
      />

      <InteractionField
        label="Product"
        value={interaction.product}
      />

      <InteractionField
        label="Sentiment"
        value={interaction.sentiment}
      />

      <InteractionField
        label="Discussion"
        value={interaction.discussion}
      />

      <InteractionField
        label="Brochure"
        value={interaction.brochure_shared ? "Yes" : "No"}
      />

      <InteractionField
        label="Follow Up"
        value={interaction.follow_up}
      />

      <InteractionField
        label="Summary"
        value={interaction.summary}
      />

    </div>

  );

}