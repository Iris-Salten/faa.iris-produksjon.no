import { Input, Tooltip } from '@heroui/react';

interface SearchBarProps {
  value?: string;
  onSearch?: (search: string) => void;
  onReset?: () => void;
}

export default function SearchBar({
  value,
  onSearch,
  onReset,
}: SearchBarProps) {
  const search = (value: string) => {
    if (!onSearch) {
      console.warn(
        'onSearch function is not provided to the search bar component.',
      );
      return;
    }

    onSearch(value);
  };

  const reset = () => {
    if (!onReset) return;

    onReset();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const value = (
          form.elements.namedItem('search') as HTMLInputElement
        )?.value.trim();

        search(value);
      }}
    >
      <Input
        name="search"
        aria-label="Search declarations"
        defaultValue={value ?? ''}
        endContent={
          value && !!onReset ? (
            <Tooltip content="Fjern søk">
              <button
                onClick={reset}
                type="reset"
                className="group cursor-pointer"
              >
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 640 640"
                  className="fill-gray-500"
                >
                  <path d="M182.9 137.4L160.3 114.7L115 160L137.6 182.6L275 320L137.6 457.4L115 480L160.3 525.3L182.9 502.6L320.3 365.3L457.6 502.6L480.3 525.3L525.5 480L502.9 457.4L365.5 320L502.9 182.6L525.5 160L480.3 114.7L457.6 137.4L320.3 274.7L182.9 137.4z" />
                </svg>
              </button>
            </Tooltip>
          ) : null
        }
        startContent={
          <svg width={14} viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M368 208a160 160 0 1 0 -320 0 160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"
            />
          </svg>
        }
        placeholder="Søk..."
        size="sm"
      />
    </form>
  );
}
