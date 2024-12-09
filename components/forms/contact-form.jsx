import { useEffect } from "react";
import {
  FormContainer,
  TextFieldElement,
  TextareaAutosizeElement,
  useFormContext,
} from "react-hook-form-mui";

import { Button, Box, Stack } from "@/components/mui";

const Controls = () => {
  const {
    formState: { isDirty, isValid, isSubmitted },
    formState,
    reset,
  } = useFormContext();

  // console.log(formState);

  useEffect(() => {
    if (isSubmitted) {
      reset();
    }
  });

  return (
    <Box sx={{ display: "flex", justifyContent: "end", gap: 2 }}>
      <Button
        aria-label="reset"
        variant="contained"
        disabled={!isDirty}
        onClick={() => {
          reset();
        }}
      >
        Reset
      </Button>
      <Button variant="contained" type="submit" disabled={!isValid}>
        Submit
      </Button>
    </Box>
  );
};

const defaultValues = { from: "", subject: "", message: "" };

function ContactForm({
  onSubmit = (vals, e) => {
    console.log(vals, e);
  },
}) {
  return (
    <FormContainer
      defaultValues={defaultValues}
      onSuccess={onSubmit}
    >
      <Stack gap={2}>
        <TextFieldElement name="from" label="from" required fullWidth />
        <TextFieldElement name="subject" label="Subject" required fullWidth />
        <TextareaAutosizeElement
          label="Message"
          name="message"
          fullWidth
          rows={10}
          required
        />
        <Controls onSubmit={onSubmit} />
      </Stack>
    </FormContainer>
  );
}

export default ContactForm;
