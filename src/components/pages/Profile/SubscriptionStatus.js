import React from "react";

import { useAtom } from "jotai";
import { Link } from "react-router-dom";

import validaityAtom from "../../atoms/validity";

export default function SubscriptionStatus({ end, id }) {
  const [, setValidity] = useAtom(validaityAtom);

  if (!end || new Date(end) <= Date.now()) {
    setValidity(false);
    return (
      <div className="noti-subs error">
        your Account is suspended until you Subscribe again
        <Link to={`/institution/${id}`}>
          <div className="fast-access">go to institution page</div>
        </Link>
      </div>
    );
  }
  setValidity(true);
  return (
    <div className="noti-subs">
      <div>your Subscription ends in {new Date(end).toLocaleString()}</div>
      <Link to={`/institution/${id}`}>
        <div className="fast-access">go to institution page</div>
      </Link>
    </div>
  );
}
