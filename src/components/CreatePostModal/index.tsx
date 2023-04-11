import {
  CreatePostModalBottomContainer,
  CreatePostModalContainer,
  CreatePostModalTopContainer,
} from "./styles";

export function CreatePostModal() {
  return (
    <CreatePostModalContainer>
      <CreatePostModalTopContainer>
        My First Post at CodeLeap Network!
        <div>
          <button>1</button>
          <button>2</button>
        </div>
      </CreatePostModalTopContainer>
      <CreatePostModalBottomContainer>
        <div>
          <span>@Victor</span>
          <span>25 minutes ago</span>
        </div>
        <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis
          lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </CreatePostModalBottomContainer>
    </CreatePostModalContainer>
  );
}
