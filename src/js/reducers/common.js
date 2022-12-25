import produce from "immer";
import plural from "config/inflections";

export default (model) => {
  const identity = model.identity;
  const pluralForm = plural(identity.toLowerCase());

  return produce((draft = [], action) => {
    switch (action.type) {
      case `${pluralForm.toUpperCase()}.ADD`:
        return draft.concat(action[pluralForm]);
      case `${identity.toUpperCase()}.DELETE`:
        return draft.filter((obj) => obj.id !== action.id);
      case `${identity.toUpperCase()}.REPLACE`: {
        const current = draft.find(
          (obj) => obj.id === action[identity.toLowerCase()].id
        );
        draft[draft.indexOf(current)] = action[identity.toLowerCase()];
        break;
      }
      case `${identity.toUpperCase()}.UPDATE`: {
        const current = draft.find((t) => t.id === action.id);
        if (current === undefined) return draft;
        const newObj = new model({ ...current });
        for (const attr of Object.keys(action.changes)) {
          newObj[attr] = action.changes[attr][1];
        }
        draft[draft.indexOf(current)] = newObj;
        break;
      }
      default:
        return draft;
    }
  });
};
